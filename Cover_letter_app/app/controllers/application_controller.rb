class ApplicationController < ActionController::API


  def encode_token(user_id)
    exp = Time.now.to_i + 1 * 3600
    exp_payload = {id: user_id, exp: exp}

    JWT.encode(exp_payload, 'I_Like_Shorts')
  end

  def decode_token
    auth_header = request.headers['Authorization']
    if auth_header
      token = auth_header.split(' ') # store token from the header
      begin
        payload = JWT.decode token[1], 'I_Like_Shorts'
        @user_id = payload[0]['id']
      rescue StandardError
        nil
      end
    end
  end

  def user_exists
    render json: { message: 'Please Login' }, status: :unauthorized unless decode_token
  end

end
