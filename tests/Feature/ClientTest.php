<?php

namespace Tests\Feature;

use App\Http\Resources\ClientResources;
use App\Models\Client;
use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Http\Request;

class ClientTest extends TestCase
{
    use RefreshDatabase;

    public function testNominalFormatRessourceClient()
    {
        $this->withoutMiddleware();
        $client = new Client();
        $client->id      = 1;
        $client->name    = "John";
        $client->surname = "Doe";
        $clientFormated = new ClientResources($client);
        $expect = $clientFormated->jsonSerialize();
        $this->assertEquals(1, $expect['id']);
        $this->assertEquals("John", $expect['name']);
        $this->assertEquals("Doe", $expect['surname']);
    }

 
    // public function testVerificationRessourceClientsFonctionnel() {
    //     $this->withoutMiddleware();
    //     $clients  = Client::factory(5)->create();
    //     $response = $this->get(route("api.clients"));
    //     $resource = ClientResources::collection($clients);
    //     // macro
    //     $response->assertResource($resource);
    // }

}
