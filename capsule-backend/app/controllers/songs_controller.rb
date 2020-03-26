class SongsController < ApplicationController

    def index
        songs = Song.all
        render json: songs.to_json, except: [:updated_at, :created_at]
    end

end
