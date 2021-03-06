d3.selectAll('.form-input-btn')
    .on('click', function() {
      var form = d3.select('div.form-element')
          .transition()
          .duration(700)
          .style('opacity', 0)
          .transition()
          .remove();
      var nextForm = d3.select('div.form-element:nth-child(2)');
      nextForm.transition().delay(1040)
          .style('opacity', 0)
          .transition()
          .duration(500)
          .style('opacity', 1)
          .style('display', 'block');
    });

d3.select('.form-finish')
    .on('click', function(d) {
      // create a demo loop
      window.setTimeout(function() { location.href='index.html'; }, 700);
    });

function lineInput(name) {
  var value = document.getElementsByName(name)[0].value;
}

function radioInput(name) {
  var value = document.querySelector('input[name=' + name + ']:checked').value;
}
