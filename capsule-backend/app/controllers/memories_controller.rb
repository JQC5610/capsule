class MemoriesController < ApplicationController

    def index
        memories = Memory.all
        puts memories
        render json: memories.to_json(include: [:memory_songs, :comments])
    end

    # def create
        
    # end
    

end
