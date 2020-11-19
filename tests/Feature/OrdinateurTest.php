<?php

namespace Tests\Feature;

use App\Http\Resources\DesktopResources;
use App\Models\Assign;
use App\Models\Client;
use App\Models\Desktop;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class OrdinateurTest extends TestCase
{

    public function testNominalFormatRessourceOrdinateur()
    {
        $client = new Client([
            "id"      => 1,
            "name"    => "testname",
            "surname" => "testsurname"
        ]);
        
        $attribution = new Assign();
        $attribution->id        = 1;
        $attribution->date      = "2020-11-18";
        $attribution->hours     = 8;
        $attribution->clients   = $client;

        $ordinateur = new Desktop();
        $ordinateur->id   = 1;
        $ordinateur->name = "pc 123";
        $ordinateur->assigns = [
            $attribution
        ];

        $resource = new DesktopResources($ordinateur);
        $expect = $resource->jsonSerialize();

        $this->assertEquals(1, $expect['id']);
        $this->assertIsObject($expect['attributions']);
        $this->assertInstanceOf('Illuminate\Http\Resources\Json\AnonymousResourceCollection', $expect['attributions']);
        $this->assertInstanceOf('App\Http\Resources\AssignResources', $expect['attributions'][0]);
        $this->assertInstanceOf('App\Models\Client', $expect['attributions'][0]['clients']);
    }

    //   public function testVerificationRessourceOrdinateurFonctionnel() {
    //     $this->withoutMiddleware();
    //     $ordinateurs = Desktop::factory(5)->create();
    //     $response = $this->get(route('api.computers'));
    //     $resource = DesktopResources::collection($ordinateurs);
    //     $response->assertResource($resource);
    // }
}
