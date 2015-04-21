require 'bundler'
Bundler.require()

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'boneish'
)

#models
require './models/card'

#Helper
def card_parameters
  request_body = JSON.parse(request.body.read.to_s)
  { title: request_body["title"], message: request_body["message"] }
end


#routes
get '/' do
  erb :index
end

get '/variables' do
  erb :variables
end


get '/api/cards' do
  content_type :json
  cards = Card.all
  cards.to_json
end

get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

post '/api/cards' do
  card = Card.create(card_parameters)
  card.to_json
end

patch '/api/cards/:id' do
  card = Card.find(params[:id].to_i)
  card.update(card_parameters())

  content_type(:json)
  card.to_json
end

put '/api/cards/:id' do
  card = Card.find(params[:id].to_i)
  card.update(card_parameters())

  content_type(:json)
  card.to_json
end

delete '/api/cards/:id' do
  content_type :json
  id = params[:id].to_i
  card = Card.destroy(id)
end

# CREATE TABLE cards (id SERIAL PRIMARY KEY, title VARCHAR(255), message VARCHAR(255));
