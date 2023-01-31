$( "#CircleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        

        // clear out any calculations
         document.getElementById("diameter").innerHTML = "";
         document.getElementById("circumference").innerHTML = "";
         document.getElementById("area").innerHTML = "";

         var radius; // string representation of the radius
         var radiusfp; // floating point value of radius

         var diameter;  // floating point radius
         var circumference;
         var area;
         var result; // displayable result

         // read in the legs as a string
         radius = document.getElementById("radius").value;

         circumference = document.getElementById("circumference").value;

         area = document.getElementById("area").value

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius ); 

         circumferencefp = parseFloat( circumference )

         areafp = parseFloat( area )

         // calculate the diameter
         diameter = calcDiameter(radiusfp);

         circumference = calcCircumference(circumferencefp);

         area = calcArea(areafp)

         // display the diameter
         document.getElementById("diameter").innerHTML = diameter.toString();

         document.getElementById("circumference").innerHTML = circumference.toString();

         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcDiameter (r)
  // returns the diameter
  // 2 times the radius
  {
      return 2 * r;
  }


  function calcCircumference (c) 
  {
    return 2 * Math.PI * radius;
  }

  function calcArea (a) 
  {
    return radius * radius * Math.PI;
  }
  
  function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("leg1error").innerHTML = "";
    document.getElementById("leg2").value = "";
    document.getElementById("leg2error").innerHTML = "";
    document.getElementById("hypotenuse").innerHTML = "";
}
