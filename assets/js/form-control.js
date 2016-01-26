d3.selectAll('.input-btn')
    .on('click', function() {
      var form = d3.select('div.form-element')
          .transition()
          .duration(700)
          .style('opacity', 0)
          .transition()
          .remove();
      var nextForm = d3.select('div.form-element:nth-child(2)');
      console.log(nextForm);
      nextForm.transition().delay(1040)
          .style('opacity', 0)
          .transition()
          .duration(500)
          .style('opacity', 1)
          .style('display', 'block');
    });
