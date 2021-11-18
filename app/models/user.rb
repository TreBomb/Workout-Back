class User < ApplicationRecord
    has_secure_password

    PASSWORD_REQUIREMENTS = /\A
    (?=.{8,})
    (?=.*\d)
    /x

    validates :name, uniqueness: true
    validates :email, uniqueness: true
    validates :password, format: PASSWORD_REQUIREMENTS
    has_many :weekly_routines
end