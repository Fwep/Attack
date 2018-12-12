class Api::UsersController < ApplicationController
  before_action :require_current_user!, except: [:create, :new]
end
