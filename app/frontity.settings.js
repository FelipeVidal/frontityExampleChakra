const settings = {
  "name": "app",
  "state": {
    "frontity": {
     "url": "https://pets.pruebascreatic.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "my-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://pets.pruebascreatic.com",
          "postTypes":[
            {
              type: "pet",
              endpoint: "pets",
              archive: "/pets"
            }
          ] 
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
