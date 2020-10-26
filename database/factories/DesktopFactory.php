<?php

namespace Database\Factories;

use App\Models\Desktop;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class DesktopFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Desktop::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name" => "pc " . Str::random(3)
        ];
    }
}
