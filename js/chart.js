const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['c#', 'SQL', 'JavaScript', 'HTML 5', 'CSS 3', 'Node js', 'React', 'PHP'],
        datasets: [{
            label: 'Skills',
            data: [60, 50, 50, 40, 40, 30, 50, 40, 100],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
            borderRadius: 5,
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});