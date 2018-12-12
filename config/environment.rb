# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!
Jbuilder.key_format camelize: :lower # This takes of camelCase to snake_case conversion
