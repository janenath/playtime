class ToysController < ApplicationController
    def index
      render(json: { toys: Toy.all })
    end
  
  
    def show
      # Input comes in from the `params` hash
      render(json: Toy.find(params[:id]))
    end
  
  
    def create
      toy = Toy.new(toy_params)
  
  
      if toy.save
        render(json: { toy: toy }, status: 201)
      else
        # Unprocessable Entity
        render(json: { toy: toy }, status: 422)
      end
    end
  
  
    def update
      toy = Toy.find(params[:id])
      toy.update(toy_params)
      render(json: { toy: toy })
    end
  
  
    def destroy
      toy = Toy.destroy(params[:id])
      render(status: 204)
    end
  
  
    private
  
    def toy_params
      # Returns a sanitized hash of the params with nothing extra
      params.required(:toy).permit(:name, :ageRange, :imageUrl, :price, :link)
    end
  end