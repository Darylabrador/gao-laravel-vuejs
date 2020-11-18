<?php

namespace Tests\Feature;

use App\Http\Resources\AssignResources;
use App\Models\Assign;
use App\Models\Client;
use App\Models\Desktop;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Mockery;
use Tests\TestCase;

class AssignTest extends TestCase
{
    use RefreshDatabase;

    public function testNominalRessourceAttribution() {
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
        
        $resource = new AssignResources($attribution);
        $expect = $resource->jsonSerialize();

        $this->assertEquals(1, $expect['idAssign']);
        $this->assertEquals("2020-11-18", $expect['date']);
        $this->assertEquals(8, $expect['hours']);
        $this->assertEquals("testname", $expect['client']['name']);
        $this->assertEquals("testsurname", $expect['client']['surname']);
    }
}
