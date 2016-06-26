
  require 'sinatra'
  require 'json'
  require 'net/http'
  require 'uri'

  use Rack::Logger

  before do
     content_type :json    
     headers 'Access-Control-Allow-Origin' => '*', 
  		   'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
  		   'Access-Control-Allow-Headers' => 'Content-Type'  
  end

  set :protection, false

  options '/FantasyPlayers' do
  	200
  end

  options '/PlayerNews' do
    200
  end

  get '/FantasyPlayers' do
    key = env['HTTP_OCP_APIM_SUBSCRIPTION_KEY']
    url = URI.parse('https://api.fantasydata.net/nfl/v2/JSON/FantasyPlayers')
    http = Net::HTTP.new(url.host, url.port)
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    http.use_ssl = true

    request = Net::HTTP::Get.new(url.request_uri)
    request.initialize_http_header({"Ocp-Apim-Subscription-Key" => key})

    response = http.request(request)
    response.body
  end

  get '/PlayerNews' do
    key = env['HTTP_OCP_APIM_SUBSCRIPTION_KEY']
    playerId = params[:playerId]
    url = URI.parse('https://api.fantasydata.net/nfl/v2/JSON/NewsByPlayerID/'+playerId)
    http = Net::HTTP.new(url.host, url.port)
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    http.use_ssl = true

    request = Net::HTTP::Get.new(url.request_uri)
    request.initialize_http_header({"Ocp-Apim-Subscription-Key" => key})

    response = http.request(request)
    response.body
  end

  post '/movie' do

    begin
      params.merge! JSON.parse(request.env["rack.input"].read)
    rescue JSON::ParserError
      logger.error "Cannot parse request body." 
    end

    { result: params[:movie], seen: true, method: 'POST' }.to_json
  end

  put '/movie' do

    begin
      params.merge! JSON.parse(request.env["rack.input"].read)
    rescue JSON::ParserError
      logger.error "Cannot parse request body." 
    end

    { result: params[:movie], updated: true, method: 'PUT' }.to_json
  end

  delete '/movie' do

    begin
      params.merge! JSON.parse(request.env["rack.input"].read)
    rescue JSON::ParserError
      logger.error "Cannot parse request body." 
    end

    { result: "#{params[:movie]} deleted!", method: 'DELETE' }.to_json
  end