<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RouteTest extends TestCase
{
    public function testRouteApiComputers()
    {
        $response = $this->call('GET','/api/computers');
        
        // Status check qui vient de $this->assertStatus
        $response->assertStatus(403);
    }
}
