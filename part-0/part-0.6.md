::: mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Previous interaction (Part-0.5) to open the spa example app - this is on form submit after that

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa {sbody: {content: "test 123", date: "2024-04-02"}}
    activate server
    server-->>browser: 201 (Created) Response JSON: {"message": "note created"}
    deactivate server

    Note right of browser: The new note is reflected on the webpage without a reload thus showing this is a single page applicaion
  :::