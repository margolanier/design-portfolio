module.exports = {
	name: 'Work',
	task($scope, App) {

		$scope.id = '02';
		$scope.header = 'Design Samples';

		$(document).on('ready', function () {
			$(".portfolio").slick({
				dots: true,
				infinite: true,
				centerMode: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				centerPadding: '0',
				speed: 300,
				variableWidth: false,
				responsive: [
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		});

	}
};
