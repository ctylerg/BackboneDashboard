require 'bundler'
Bundler.require()

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql'
  :database => 'boneish'
)

require './models/card'

get '/' do
  erb :index
end


get '/api/cards'
  content_type :jason
  cards = Card.all
  cards.to_json
end

get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

post '/api/cards' do
  content_type :json
  card = Card.create(params[:card])
  card.to_json
end

put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(params[:card])
  todo.to_json
end

patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i).update(params[:card])
  card.to_json
end

delete '/api/cards/:id' do
  content_type :json
  id = params[:id].to_i
  card = Card.destroy(id)
end
