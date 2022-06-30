module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {    
    extend: {
        backgroundImage: {
        'main-img': "url('./assets/cdc-bsT-u4nBe7o-unsplash.jpg')"
      },
  
      colors: {
        slate:{
          primary: '#101f3c'
        },
        orange:{
          primary: '#fa510f'
        },
        gray:{
          secondary: '#d0c8c8',
          primary: '#f0ecec',
          backg: '#f6faff',
         
        }

      },
    },
  },
  plugins: [],
}
