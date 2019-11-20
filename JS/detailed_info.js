(function() {
    var $detailedInfoContainer = $('.detailed-info-container');
    var $timelineWrapper = $('.timeline-wrapper');

    function showSidePanel($broadcastData) {       
        var programName = $broadcastData.data('programname');
        var programSubName = $broadcastData.data('subname');
        var description = $broadcastData.data('description');
        var start = $broadcastData.data('start');
        var episodeNumber = $broadcastData.data('epnumber');
        var seasonNumber = $broadcastData.data('season');
        var duration = $broadcastData.data('duration');
        var lang = $broadcastData.data('language');
        var subtitles = $broadcastData.data('subtitles');
        $detailedInfoContainer.addClass('active');
        $timelineWrapper.addClass('info-panel-open');
        
        hideInfoParts();
        setTimeout(function() {
            $('.program-name').html(programName);
            $('.program-sub-name').html(programSubName);
            $('.episode-num').html(episodeNumber);
            $('.episode-season-num').html(seasonNumber);
            $('.episode-description').html(description);
            $('.episode-time-start').html(start);
            $('.episode-time-duration').html(duration);
            $('.episode-speak-lang').html(lang);
            $('.episode-subtitles').html(subtitles ? 'JA' : 'NEJ');
            showInfoParts($('.detailed-info__part'), 0);
        }, 250);
    }

    /**
     * Shows different info parts gradually 
     * @param {JQuery} $elements 
     * @param {Number} index 
     */
    function showInfoParts($elements, index) {
        if(index >= $elements.length) {
            return;
        }
        $elements.eq(index).addClass('active');
        setTimeout(function() {
            showInfoParts($elements, index + 1);
        }, 100);
    }

    function hideInfoParts() {
        $('.detailed-info__part').removeClass('active');
    }

    function hideSidePanel() {
        hideInfoParts();
        $detailedInfoContainer.removeClass('active');
        $timelineWrapper.removeClass('info-panel-open');
    }


    $('.broadcast-container').click(function() {
        showSidePanel($(this));
    });

    $('#close-info-container-button').click(function() {
        hideSidePanel();
    });
})();
