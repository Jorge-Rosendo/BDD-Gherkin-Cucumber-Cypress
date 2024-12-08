Feature: Login

    Screnario: Valid Login
        Given I'm on the login page
        When I type my "lume@test.com.br", "senha" and click on login button
        Then I have a successful Login

    Screnario: Invalid Login
        Given I'm on the login page
        When I type my "lume@naoexiste.com.br", "senha" and click on login button
        Then I receive an error message for my login