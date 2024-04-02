::: mermaid
sequenceDiagram
    participant browser
    participant server
   
    Note right of browser: Previous interaction (example given on 0.4 problem statement) to open the example app - this is on form submit after that

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note {body: {note: "ASD 123"}}
    activate server
    server-->>browser: 302 (Redirect) Location: /exampleapp/notes
    deactivate server
    
    Note left of server: The response is 302 is a redirect and the response header contains the location for the new GET request

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    Note right of browser:GET request to location sent in the previous API response header
    server-->>browser: HTML document
    deactivate server
    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2024-04-01" }, ... , {"content": "ASD 123", "date": "2024-04-02"}]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes and the new response contains the new note
:::