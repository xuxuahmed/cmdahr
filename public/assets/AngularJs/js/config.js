materialAdmin.config(function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");

        $stateProvider
        
            //------------------------------
            // HOME
            //------------------------------


            .state ('home', {
                url: '/home',
                templateUrl: 'assets/AngularJs/views/home.html', controller: 'menuCtrl' ,  
                           
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/fullcalendar/dist/fullcalendar.min.css',
                                ]
                            },
                            {
                                name: 'vendors',
                                insertBefore: '#app-level-js',
                                files: [
                                    'assets/AngularJs/vendors/sparklines/jquery.sparkline.min.js',
                                    'assets/AngularJs/vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
                                    'assets/AngularJs/vendors/bower_components/simpleWeather/jquery.simpleWeather.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

//------------------------------
            // PERSONNEL
            //------------------------------
            .state ('personnel', {
                url: '/personnel',
                templateUrl: 'assets/AngularJs/views/common-2.html'
            })

            .state ('personnel.attendance', {
                url: '/personnel-attendance',
                templateUrl: 'assets/AngularJs/views/personnel-attendance.html',
                controller: 'attCtrl',
                resolve: {
                    user: ['$http',
                        function($http) {
                            return $http.get("/getUser/163");
                        }
                    ]
                }
            })
             .state ('personnel.overtime', {
                url: '/overtime',
                templateUrl: 'assets/AngularJs/views/overtime.html',
                 controller: 'overtimeCtrl'
            })
             .state ('personnel.leave-stat', {
                url: '/leave-stat',
                templateUrl: 'assets/AngularJs/views/leave-stat.html',
                controller: 'leaveCtrl',
                resolve: {
                    user: ['$http',
                        function($http) {
                            return $http.get("/getUser/163");
                        }
                    ]
                }
                
            })
           
              .state ('personnel.salary-slip', {
                url: '/salary-slip',
                templateUrl: 'assets/AngularJs/views/salary-slip.html',
                controller: 'salarySlipCtrl'
            })

            .state ('personnel.history', {
                url: '/history',
                templateUrl: 'assets/AngularJs/views/history.html',
                controller: 'historyCtrl',
                resolve: {
                    user: ['$http',
                        function($http) {
                            return $http.get("/getUser/163");
                        }

                    ],

                    leaveTypes:['$http',
                        function($http) {
                            return $http.get("/leavetypes");
                        }],

                        allLeaves:['$http',
                        function($http) {
                            return $http.get("/isLeaveInd/45");                            
                
                        }],

                        employ:['$http',
                        function($http) {
                            return $http.get("/getEmployment/45");                            
                
                        }]
                }
            })

// MASTER 
            //------------------------------
            .state ('master', {
                url: '/master',
                templateUrl: 'assets/AngularJs/views/common-2.html'
            })

            .state('master.holiday-manager', {
                url: '/holiday-manager',
                templateUrl: 'assets/AngularJs/views/holiday-manager.html',
                controller: 'holidayManagerCtrl'
            })

            .state('master.master-leaves', {
                url: '/master-leaves',
                templateUrl: 'assets/AngularJs/views/master-leaves.html',
                controller: 'masterLeaveCtrl'

            })

            .state('master.master-allowance', {
                url: '/master-allowance',
                templateUrl: 'assets/AngularJs/views/master-allowance.html',
                controller: 'masterAllowanceCtrl'
            })

             .state('master.master-structure', {
                url: '/master-structure',
                templateUrl: 'assets/AngularJs/views/master-structure.html',
                controller: 'masterStructureCtrl'
            })

             .state('master.master-post', {
                url: '/master-post',
                templateUrl: 'assets/AngularJs/views/master-post.html',
                controller: 'mastrPostCtrl'
            })
             .state('master.master-post-class', {
                url: '/master-post-class',
                templateUrl: 'assets/AngularJs/views/master-post-class.html',
                controller: 'mastrPostClassCtrl'
            })

//------------------------------
            // MANAGEMENT
            //------------------------------
            .state ('management', {
                url: '/management',
                templateUrl: 'assets/AngularJs/views/common-2.html'
            })

            .state('management.employee-info', {
                url: '/employee-information',
                templateUrl: 'assets/AngularJs/views/employee-information.html',
                controller: 'empInfoCtrl'
            })

            .state('management.leave-request', {
                url: '/leave-request',
                templateUrl: 'assets/AngularJs/views/leave-request.html'
            })
     
            .state('management.management-groups-manager', {
                url: '/management-groups-manager',
                templateUrl: 'assets/AngularJs/views/management-group-roster.html',
                controller: 'managementGroupsManagerCtrl'
            })



//------------------------------
            // SUPERVISE
            //------------------------------
            .state ('supervise', {
                url: '/supervise',
                templateUrl: 'assets/AngularJs/views/common-2.html'
            })

            .state('supervise.authorise-overtime', {
                url: '/authorise-overtime',
                templateUrl: 'assets/AngularJs/views/authorise-overtime.html'
            })
            .state('supervise.approve-leave-request', {
                url: '/approve-leave-request',
                templateUrl: 'assets/AngularJs/views/approve-leave-request.html'
            })
//------------------------------
            // PAYROLL
            //------------------------------
            .state ('payroll', {
                url: '/payroll',
                templateUrl: 'assets/AngularJs/views/payroll.html',
                controller: 'payrollCtrl'
            })
//------------------------------
            // REPORTS
            //------------------------------
            .state ('reports', {
                url: '/reports',
                templateUrl: 'assets/AngularJs/views/reports.html'
            })

            //------------------------------
            // HEADERS
            //------------------------------
            .state ('headers', {
                url: '/headers',
                templateUrl: 'assets/AngularJs/views/common-2.html'
            })

            .state('headers.textual-menu', {
                url: '/textual-menu',
                templateUrl: 'assets/AngularJs/views/textual-menu.html'
            })

            .state('headers.image-logo', {
                url: '/image-logo',
                templateUrl: 'assets/AngularJs/views/image-logo.html'
            })

            .state('headers.mainmenu-on-top', {
                url: '/mainmenu-on-top',
                templateUrl: 'assets/AngularJs/views/mainmenu-on-top.html'
            })


            //------------------------------
            // TYPOGRAPHY
            //------------------------------
        
            .state ('typography', {
                url: '/typography',
                templateUrl: 'assets/AngularJs/views/typography.html'
            })


            //------------------------------
            // WIDGETS
            //------------------------------
        
            .state ('widgets', {
                url: '/widgets',
                templateUrl: 'assets/AngularJs/views/common.html'
            })

            .state ('widgets.widgets', {
                url: '/widgets',
                templateUrl: 'assets/AngularJs/views/widgets.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/mediaelement/build/mediaelementplayer.css',
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                                    'assets/AngularJs/vendors/bower_components/autosize/dist/autosize.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

            .state ('widgets.widget-templates', {
                url: '/widget-templates',
                templateUrl: 'assets/AngularJs/views/widget-templates.html',
            })


            //------------------------------
            // TABLES
            //------------------------------
        
            .state ('tables', {
                url: '/tables',
                templateUrl: 'assets/AngularJs/views/common.html'
            })
            
            .state ('tables.tables', {
                url: '/tables',
                templateUrl: 'assets/AngularJs/views/tables.html'
            })
            
            .state ('tables.data-table', {
                url: '/data-table',
                templateUrl: 'assets/AngularJs/views/data-table.html'
            })

        
            //------------------------------
            // FORMS
            //------------------------------
            .state ('form', {
                url: '/form',
                templateUrl: 'assets/AngularJs/views/common.html'
            })

            .state ('form.basic-form-elements', {
                url: '/basic-form-elements',
                templateUrl: 'assets/AngularJs/views/form-elements.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/autosize/dist/autosize.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

            .state ('form.form-components', {
                url: '/form-components',
                templateUrl: 'assets/AngularJs/views/form-components.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/nouislider/jquery.nouislider.css',
                                    'assets/AngularJs/vendors/farbtastic/farbtastic.css',
                                    'assets/AngularJs/vendors/bower_components/summernote/dist/summernote.css',
                                    'assets/AngularJs/vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                                    'assets/AngularJs/vendors/bower_components/chosen/chosen.min.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/input-mask/input-mask.min.js',
                                    'assets/AngularJs/vendors/bower_components/nouislider/jquery.nouislider.min.js',
                                    'assets/AngularJs/vendors/bower_components/moment/min/moment.min.js',
                                    'assets/AngularJs/vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                                    'assets/AngularJs/vendors/bower_components/summernote/dist/summernote.min.js',
                                    'assets/AngularJs/vendors/fileinput/fileinput.min.js',
                                    'assets/AngularJs/vendors/bower_components/chosen/chosen.jquery.js',
                                    'assets/AngularJs/vendors/bower_components/angular-chosen-localytics/chosen.js',
                                    'assets/AngularJs/vendors/bower_components/angular-farbtastic/angular-farbtastic.js'
                                ]
                            }
                        ])
                    }
                }
            })
        
            .state ('form.form-examples', {
                url: '/form-examples',
                templateUrl: 'views/form-examples.html'
            })
        
            .state ('form.form-validations', {
                url: '/form-validations',
                templateUrl: 'assets/AngularJs/views/form-validations.html'
            })
        
            
            //------------------------------
            // USER INTERFACE
            //------------------------------
        
            .state ('user-interface', {
                url: '/user-interface',
                templateUrl: 'assets/AngularJs/views/common.html'
            })
        
            .state ('user-interface.ui-bootstrap', {
                url: '/ui-bootstrap',
                templateUrl: 'assets/AngularJs/views/ui-bootstrap.html'
            })

            .state ('user-interface.colors', {
                url: '/colors',
                templateUrl: 'assets/AngularJs/views/colors.html'
            })

            .state ('user-interface.animations', {
                url: '/animations',
                templateUrl: 'assets/AngularJs/views/animations.html'
            })
        
            .state ('user-interface.box-shadow', {
                url: '/box-shadow',
                templateUrl: 'assets/AngularJs/views/box-shadow.html'
            })
        
            .state ('user-interface.buttons', {
                url: '/buttons',
                templateUrl: 'assets/AngularJs/views/buttons.html'
            })
        
            .state ('user-interface.icons', {
                url: '/icons',
                templateUrl: 'assets/AngularJs/views/icons.html'
            })
        
            .state ('user-interface.alerts', {
                url: '/alerts',
                templateUrl: 'assets/AngularJs/views/alerts.html'
            })

            .state ('user-interface.preloaders', {
                url: '/preloaders',
                templateUrl: 'assets/AngularJs/views/preloaders.html'
            })

            .state ('user-interface.notifications-dialogs', {
                url: '/notifications-dialogs',
                templateUrl: 'assets/AngularJs/views/notification-dialog.html'
            })
        
            .state ('user-interface.media', {
                url: '/media',
                templateUrl: 'assets/AngularJs/views/media.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/mediaelement/build/mediaelementplayer.css',
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })
        
            .state ('user-interface.other-components', {
                url: '/other-components',
                templateUrl: 'assets/AngularJs/views/other-components.html'
            })
            
        
            //------------------------------
            // CHARTS
            //------------------------------
            
            .state ('charts', {
                url: '/charts',
                templateUrl: 'assets/AngularJs/views/common.html'
            })

            .state ('charts.flot-charts', {
                url: '/flot-charts',
                templateUrl: 'assets/AngularJs/views/flot-charts.html',
            })

            .state ('charts.other-charts', {
                url: '/other-charts',
                templateUrl: 'assets/AngularJs/views/other-charts.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/sparklines/jquery.sparkline.min.js',
                                    'assets/AngularJs/vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
                                ]
                            }
                        ])
                    }
                }
            })
        
        
            //------------------------------
            // CALENDAR
            //------------------------------
            
            .state ('calendar', {
                url: '/calendar',
                templateUrl: 'assets/AngularJs/views/calendar.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/fullcalendar/dist/fullcalendar.min.css',
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/moment/min/moment.min.js',
                                    'assets/AngularJs/vendors/bower_components/fullcalendar/dist/fullcalendar.min.js'
                                ]
                            }
                        ])
                    }
                }
            })
        
        
            //------------------------------
            // PHOTO GALLERY
            //------------------------------
            
             .state ('photo-gallery', {
                url: '/photo-gallery',
                templateUrl: 'assets/AngularJs/views/common.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

            //Default
        
            .state ('photo-gallery.photos', {
                url: '/photos',
                templateUrl: 'assets/AngularJs/views/photos.html'
            })
        
            //Timeline
    
            .state ('photo-gallery.timeline', {
                url: '/timeline',
                templateUrl: 'assets/AngularJs/views/photo-timeline.html'
            })
        
        
            //------------------------------
            // GENERIC CLASSES
            //------------------------------
            
            .state ('generic-classes', {
                url: '/generic-classes',
                templateUrl: 'assets/AngularJs/views/generic-classes.html'
            })
        
            
            //------------------------------
            // PAGES
            //------------------------------
            
            // .state ('pages', {
            //     url: '/pages',
            //     templateUrl: 'views/profile.html'
            // })
            
        
            //Profile
        
            .state ('profile', {
                url: '/profile',
                templateUrl: 'assets/AngularJs/views/profile.html',
                   controller: 'indCtrl'
            })
        
            .state ('profile.profile-about', {
                url: '/profile-about',
                templateUrl: 'assets/AngularJs/views/profile-about.html',
                   controller: 'indCtrl', 
            })
        
            .state ('profile.profile-education', {
                url: '/profile-education',
                templateUrl: 'assets/AngularJs/views/profile-education.html',
                   controller: 'indCtrl', 
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })

            .state ('profile.profile-trainings', {
                url: '/profile-trainings',
                templateUrl: 'assets/AngularJs/views/profile-trainings.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })
        
            .state ('profile.profile-job', {
                url: '/profile-job',
                templateUrl: 'assets/AngularJs/views/profile-job.html'
            })
        
        
            //-------------------------------
        
            .state ('pages.listview', {
                url: '/listview',
                templateUrl: 'assets/AngularJs/views/list-view.html'
            })
        
            .state ('pages.messages', {
                url: '/messages',
                templateUrl: 'assets/AngularJs/views/messages.html'
            })
        
            .state ('pages.pricing-table', {
                url: '/pricing-table',
                templateUrl: 'assets/AngularJs/views/pricing-table.html'
            })
        
            .state ('pages.contacts', {
                url: '/contacts',
                templateUrl: 'assets/AngularJs/views/contacts.html'
            })
        
            .state ('pages.invoice', {
                url: '/invoice',
                templateUrl: 'assets/AngularJs/views/invoice.html'
            })
                                
            .state ('pages.wall', {
                url: '/wall',
                templateUrl: 'assets/AngularJs/views/wall.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([
                            {
                                name: 'vendors',
                                insertBefore: '#app-level',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/autosize/dist/autosize.min.js',
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'assets/AngularJs/vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                                    'assets/AngularJs/vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
                        ])
                    }
                }
            })
            
            //------------------------------
            // BREADCRUMB DEMO
            //------------------------------
            .state ('breadcrumb-demo', {
                url: '/breadcrumb-demo',
                templateUrl: 'assets/AngularJs/views/breadcrumb-demo.html'
            })
    });
