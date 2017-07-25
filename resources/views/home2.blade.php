<!DOCTYPE html>
    <!--[if IE 9 ]><html class="ie9" data-ng-app="materialAdmin" data-ng-controller="materialadminCtrl as mactrl"><![endif]-->
    <![if IE 9 ]><html data-ng-app="materialAdmin" data-ng-controller="materialadminCtrl as mactrl"><![endif]>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>CMDA HR</title>

        <!-- Vendor CSS -->
        <link href="assets/AngularJs/vendors/bower_components/animate.css/animate.min.css" rel="stylesheet">
        <link href="assets/AngularJs/vendors/bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css" rel="stylesheet">
        <link href="assets/AngularJs/vendors/bower_components/bootstrap-sweetalert/lib/sweet-alert.css" rel="stylesheet">
        <link href="assets/AngularJs/vendors/bower_components/angular-loading-bar/src/loading-bar.css" rel="stylesheet">
        <link href="assets/AngularJs/vendors/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css" rel="stylesheet">

        <!-- CSS -->
        <link href="assets/AngularJs/css/app.min.1.css" rel="stylesheet" id="app-level">
        <link href="assets/AngularJs/css/app.min.2.css" rel="stylesheet">
        <link href="assets/AngularJs/css/demo.css" rel="stylesheet">

    </head>
       

<header id="header" data-current-skin=@{{mactrl.currentSkin}} data-ng-include="'assets/AngularJs/template/header.html'" data-ng-controller="headerCtrl as hctrl"></header>

<section id="main">
    <aside id="sidebar" data-ng-include="'assets/AngularJs/template/sidebar-left.html'" data-ng-class="{ 'toggled': mactrl.sidebarToggle.left === true }"></aside>

    <aside id="chat" data-ng-include="'assets/AngularJs/template/chat.html'" data-ng-class="{ 'toggled': mactrl.sidebarToggle.right === true }"></aside>

    <section id="content">
        <div class="container">
           <data ui-view></data> 
                </div>
    </section>
</section>

<footer id="footer" data-ng-include="'assets/AngularJs/template/footer.html'"></footer>
       

        <!-- Core -->
        <script src="assets/AngularJs/vendors/bower_components/jquery/dist/jquery.min.js"></script>

        <!-- Angular -->
        <script src="assets/AngularJs/vendors/bower_components/angular/angular.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/angular-animate/angular-animate.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/angular-resource/angular-resource.min.js"></script>
        
        <!-- Angular Modules -->
        <script src="assets/AngularJs/vendors/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/angular-loading-bar/src/loading-bar.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/oclazyload/dist/ocLazyLoad.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>

        <!-- Common Vendors -->
        <script src="assets/AngularJs/vendors/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/bootstrap-sweetalert/lib/sweet-alert.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/Waves/dist/waves.min.js"></script>
        <script src="assets/AngularJs/vendors/bootstrap-growl/bootstrap-growl.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/ng-table/dist/ng-table.min.js"></script>
       

        <!-- Placeholder for IE9 -->
        <!--[if IE 9 ]>
            <script src="vendors/bower_components/jquery-placeholder/jquery.placeholder.min.js"></script>
        <![endif]-->

        <!-- Using below vendors in order to avoid misloading on resolve -->
        <script src="assets/AngularJs/vendors/bower_components/flot/jquery.flot.js"></script>
        <script src="assets/AngularJs/js/moment.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/flot.curvedlines/curvedLines.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/flot/jquery.flot.resize.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/moment/min/moment.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/fullcalendar/dist/fullcalendar.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/flot-orderBars/js/jquery.flot.orderBars.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/flot/jquery.flot.pie.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
        <script src="assets/AngularJs/vendors/bower_components/angular-nouislider/src/nouislider.min.js"></script>
        
        
        <!-- App level -->
        <script src="assets/AngularJs/js/app.js"></script>
        <script src="assets/AngularJs/js/config.js"></script>
        <script src="assets/AngularJs/js/controllers/main.js"></script>
        <script src="assets/AngularJs/js/controllers/attendance.js"></script>
        <script src="assets/AngularJs/js/controllers/individuals.js"></script>
        <script src="assets/AngularJs/js/services.js"></script>
        <script src="assets/AngularJs/js/templates.js"></script>
        <script src="assets/AngularJs/js/controllers/ui-bootstrap.js"></script>
        <script src="assets/AngularJs/js/controllers/table.js"></script>
        <script src="assets/AngularJs/js/controllers/leaveStats.js"></script>
        <script src="assets/AngularJs/js/controllers/salarySlip.js"></script>
        <script src="assets/AngularJs/js/controllers/overtime.js"></script>
        <script src="assets/AngularJs/js/controllers/payroll.js"></script>
        <script src="assets/AngularJs/js/controllers/history.js"></script>


        <!-- Template Modules -->
        <script src="assets/AngularJs/js/modules/template.js"></script>
        <script src="assets/AngularJs/js/modules/ui.js"></script>
        <script src="assets/AngularJs/js/modules/charts/flot.js"></script>
        <script src="assets/AngularJs/js/modules/charts/other-charts.js"></script>
        <script src="assets/AngularJs/js/modules/form.js"></script>
        <script src="assets/AngularJs/js/modules/media.js"></script>
        <script src="assets/AngularJs/js/modules/components.js"></script>
        <script src="assets/AngularJs/js/modules/calendar.js"></script>
        <script src="assets/AngularJs/js/modules/demo.js"></script>
    </body>
</html>

