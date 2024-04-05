document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

      city=document.querySelector("#city").value;
      const key='7249e078a2c38367fa1502b8f8bcd888';
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      async function test(){
          try {
              const respo=await fetch(url);
              if(!respo.ok){alert(`Network Error-404`);}
              const data=await respo.json();
              return data;
          } catch (error) {
              alert(error);
          }
      }
          test().then((data)=>{
              console.log(data);
              var iconcode=data.weather[0].icon
              var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";                    

              $('#country').html(data.sys.country);
              $('#name').html(`${data.name} | `);
              $('#temp').html(`${data.main.temp}*`);
              $('#weather').html(data.weather[0].main);
              $('#wicon').attr('src', iconurl);
              
              
          }).catch((error)=>{console.log(error)})
      });