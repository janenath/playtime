class WelcomeController < ApplicationController
    def index
        render json: { status: 200, message: "Capsule API" }
    end
end
