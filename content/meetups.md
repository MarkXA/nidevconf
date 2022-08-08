+++
title = "NI Tech Meetup calendar"
+++

# NI Tech Meetup calendar

You can also subscribe to [https://www.nidevconf.com/data/ni-tech-meetups.ics](/data/ni-tech-meetups.ics) in your calendar of choice, or even [use the JSON](/data/ni-tech-meetups.json) like this page does. And if your meetup isn't showing here, please do [let us know](mailto:inbox@nidevconf.com).

<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.1/knockout-latest.min.js" integrity="sha512-vs7+jbztHoMto5Yd/yinM4/y2DOkPLt0fATcN+j+G4ANY2z4faIzZIOMkpBmWdcxt+596FemCh9M18NUJTZwvw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<ul class="hide-at-first spaced" data-bind="foreach: meetups">
    <li>
        <div>
            <strong><span data-bind="text: date"></span></strong>,
            <span data-bind="text: startTime"></span>
            -
            <span data-bind="text: endTime"></span>
        </div>
        <div>
            <strong><span data-bind="text: meetupName"></span></strong>
            -
            <a data-bind="attr: {href: url}"><span data-bind="text: eventName"></span></a>
        </div>
    </li>
</ul>

<script src="/js/meetups.js"></script>