$( "#CircleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        

        // clear out any calculations
         document.getElementById("diameter").innerHTML = "";

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

         // calculate the diameter
         diameter = calcDiameter(radiusfp);

         circumference = calcCircumference(radius);

         area = calcArea(radius);

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


  function calcCircumference (radius) 
  {
    return 2 * Math.PI * radius;
  }

  function calcArea (radius) 
  {
    return Math.PI * radius * radius;
  }
  
  function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}
