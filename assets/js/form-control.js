d3.selectAll('.input-btn')
    .on('click', function() {
      var form = d3.select('.form-element')
          .transition()
          .duration(700)
          .style('opacity', 0);
      form.remove();
    });
