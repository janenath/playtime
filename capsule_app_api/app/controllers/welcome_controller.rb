class WelcomeController < ApplicationController
    render json: { status: 200, message: "Capsule API" }
end
