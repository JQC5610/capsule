class SongsController < ApplicationController

    def index
        songs = Song.all
        render json: songs.to_json, except: [:updated_at, :created_at]
    end

    def new
        song = Song.new
        render json: songs.to_json, except: [:updated_at, :created_at]
    end

    def create
        song = Song.create(song_params)
        render json: songs.to_json, except: [:updated_at, :created_at]
    end



private

def song_params
    params.require(:song).permit(:name, :artist, :uri)
end
end
