Feature: Assesment task info

@STAS1
Scenario: See assesment task info
Given assesment task has been available to the user
When user lands on assesment Page
Then user verifies expected uuid and tox are displayed 