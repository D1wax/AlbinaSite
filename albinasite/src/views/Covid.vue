<template>
  <div>
    <div class="container">
      <h1 class="text - center mt-5">Covid 19 Live Data in Table</h1>
      <br /><br />
      <table class="table table- hover">
        <thead>
          <tr>
            <th>Total Cases</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr id="data">
            
          </tr>
        </tbody>
      </table>
      <br />
      <button onclick="refreshData()" class="btn btn-danger btn-block">
        Refresh Data
      </button>
    </div>
  </div>
</template>
<script src="jquery-3.5.1.min.js"></script>
<script>

$(document).ready(function(){
  init()



  function init(){
    var url = "https://api.covid19api.com/summary"

    $.get(url,function(data){
      console.log(data)
    })
  }
})
</script>

<style>
</style>