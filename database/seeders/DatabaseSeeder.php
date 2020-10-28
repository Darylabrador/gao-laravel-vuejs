<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // if we have prob with foreign key
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // if we want to truncate data
        DB::table('clients')->truncate();
        DB::table('desktops')->truncate();
        DB::table('assigns')->truncate();

        \App\Models\User::factory(1)->create();
        \App\Models\Desktop::factory(5)->create();
        \App\Models\Client::factory(5)->create();


        $faker = \Faker\Factory::create();
        for ($i=0; $i < 5; $i++) { 
            DB::table('assigns')->insert([
                'hours' => "{$faker->numberBetween(8, 16)}",
                'desktop_id' => $i,
                'client_id' => $faker->numberBetween(1, 5)
            ]);
        }
    }
}