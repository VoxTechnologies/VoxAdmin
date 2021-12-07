"use strict";

// Class definition
var KTWidgets = function () {
    
    // Essentials
    
    // Widget Small
    
    // Subscribers
    var subscribers = function() {
        var charts = document.querySelectorAll('.subscribers');

        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Subscribers',
                    data: [63210, 64320, 65214, 66324, 67234, 69425]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
   
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // MRR
    var mrr = function() {
        var charts = document.querySelectorAll('.mrr');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'MRR',
                    data: [8358332, 8589215, 8872528, 8942529, 9102950, 9349432]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }    
    
    // ARPA
    var arpa = function() {
        var charts = document.querySelectorAll('.arpa');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'ARPA',
                    data: [131.41, 134.53, 137.42, 141.52, 143.14, 139.42]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return '$' + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // New Subscribers
    var newsubscribers = function() {
        var charts = document.querySelectorAll('.newsubscribers');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'New Subscribers',
                    data: [742, 798, 854, 930, 973, 1131]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Trials
    var trials = function() {
        var charts = document.querySelectorAll('.trials');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Trials',
                    data: [1634, 1751, 1842, 1935, 2014, 2284]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // New Trials
    var newtrials = function() {
        var charts = document.querySelectorAll('.newtrials');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'New Trials',
                    data: [149, 152, 179, 193, 183, 174]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // #Customer Churn
    var n_customerchurn = function() {
        var charts = document.querySelectorAll('.n_customerchurn');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Customer Churns',
                    data: [48, 42, 73, 57, 83, 98]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // %Customer Churn
    var p_customerchurn = function() {
        var charts = document.querySelectorAll('.p_customerchurn');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: '%Customer Churn',
                    data: [0.11, 0.10, 0.12, 0.13, 0.12, 0.14]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val + "%"
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Expansions
    var expansions = function() {
        var charts = document.querySelectorAll('.expansions');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Expansions',
                    data: [39, 41, 48, 52, 62, 84]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Contractions
    var contractions = function() {
        var charts = document.querySelectorAll('.contractions');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Contractions',
                    data: [27, 14, 19, 18, 27, 32]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Reactivations
    var reactivations = function() {
        var charts = document.querySelectorAll('.reactivations');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Reactivations',
                    data: [12, 17, 10, 18, 22, 17]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Gross MRR Churn
    var grossmrrchurn = function() {
        var charts = document.querySelectorAll('.grossmrrchurn');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Gross MRR Churn',
                    data: [0.73, 0.83, 0.72, 0.63, 0.87, 0.94]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val + "%"
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Net MRR Growth
    var netmrrgrowth = function() {
        var charts = document.querySelectorAll('.netmrrgrowth');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Net MRR Growth',
                    data: [1.34, 1.42, 1.47, 1.56, 1.59, 1.68]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val + "%"
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Avg Favorites
    var avgfavorites = function() {
        var charts = document.querySelectorAll('.avgfavorites');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Avg. Favorites',
                    data: [182.5, 189.0, 195.5, 204.4, 211.4, 219.2]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Avg Essentials
    var avgessentials = function() {
        var charts = document.querySelectorAll('.avgessentials');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Avg. Essentials',
                    data: [19.2, 24.8, 26.5, 29.2, 32.4, 34.5]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // SKUs
    var skus = function() {
        var charts = document.querySelectorAll('.skus');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'SKUs',
                    data: [8291, 8639, 8824, 9042, 9485, 9822]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Unsold
    var unsold = function() {
        var charts = document.querySelectorAll('.unsold');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Unsold',
                    data: [15.1, 14.9, 14.2, 13.8, 13.6, 13.2]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val + "%"
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Requests
    var requests = function() {
        var charts = document.querySelectorAll('.requests');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Requests',
                    data: [82, 93, 104, 89, 105, 132]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // #Inventories
    var n_inventories = function() {
        var charts = document.querySelectorAll('.n_inventories');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: '#Inventories',
                    data: [592932, 624242, 673424, 702422, 729144, 749204]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Inventory Amount
    var a_inventories = function() {
        var charts = document.querySelectorAll('.a_inventories');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Inventory Amount',
                    data: [7708116, 8009241, 8424242, 8842041, 9434304, 9739652]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // DSI
    var dsi = function() {
        var charts = document.querySelectorAll('.dsi');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Days Sales of Inventory',
                    data: [47.4, 48.0, 49.2, 48.2, 50.1, 52.2]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val + "days"
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Stores Delivered
    var storesdelivered = function() {
        var charts = document.querySelectorAll('.storesdelivered');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Stores Delivered ',
                    data: [221235, 223492, 228245, 234154, 238325, 242987]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Sales/Store
    var sales_store = function() {
        var charts = document.querySelectorAll('.sales_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Sales/Store',
                    data: [49.20, 50.24, 48.24, 50.24, 51.94, 52.35]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Items Delivered/Store
    var itemsdelivered_store = function() {
        var charts = document.querySelectorAll('.itemsdelivered_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Items Delivered/Store',
                    data: [18.5, 19.8, 19.3, 18.9, 19.7, 19.2]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Items Sold/Store
    var itemssold_store = function() {
        var charts = document.querySelectorAll('.itemssold_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Items Sold/Store',
                    data: [16.9, 17.3, 17.5, 17.4, 17.6, 17.8]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Purchasing Cost/Store
    var purchasing_store = function() {
        var charts = document.querySelectorAll('.purchasing_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Purchasing Cost/Store',
                    data: [31.40, 31.28, 31.10, 30.85, 30.68, 30.52]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Fulfillment Cost/Store
    var fulfillment_store = function() {
        var charts = document.querySelectorAll('.fulfillment_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Fulfillment Cost/Store',
                    data: [2.27, 2.13, 1.89, 1.58, 1.41, 1.29]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Shipping Cost/Store
    var shipping_store = function() {
        var charts = document.querySelectorAll('.shipping_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Shipping Cost/Store',
                    data: [4.23, 4.20, 4.16, 4.12, 4.06, 3.91]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Payment Processing Cost/Store
    var payment_store = function() {
        var charts = document.querySelectorAll('.payment_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Payment Cost/Store',
                    data: [1.37, 1.32, 1.29, 1.27, 1.25, 1.24]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // COGS/Store
    var cogs_store = function() {
        var charts = document.querySelectorAll('.cogs_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'COGS',
                    data: [33.46, 33.87, 34.85, 34.96, 35.12, 35.60]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // $Gross Margin/Store
    var a_grossmargin_store = function() {
        var charts = document.querySelectorAll('.a_grossmargin_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: '$Gross Margin',
                    data: [15.74, 15.92, 16.13, 16.31, 16.59, 16.72]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // %Gross Margin/Store
    var p_grossmargin_store = function() {
        var charts = document.querySelectorAll('.p_grossmargin_store');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: '%Gross Margin',
                    data: [28.5, 29.8, 30.5, 31.2, 31.8, 32.4]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val + "%"
                        }
                    }
                },
                colors: [lightColor],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Dashboard
    
    // Sales Transactions
    var dash_salestransactions = function() {
        var charts = document.querySelectorAll('.dash_salestransactions');
    
        var color;
        var strokeColor;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var options;
        var chart;
    
        [].slice.call(charts).map(function(element) {            
            height = parseInt(KTUtil.css(element, 'height'));
    
            var options = {
                series: [{
                    name: 'Sales Transaction',
                    data: [8083924, 8828441, 9382449, 10324284, 11318069, 12492350]
                }, {
                    name: 'COGS',
                    data: [6242492, 6642421, 7132842, 7452492, 7942893, 8348320]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'bar',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: ['28%'],
                        borderRadius: 5
                    }
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    type: ['solid', 'solid', 'solid'],
                    opacity: [1, 0.2, 0.6]
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: ['#51BADE', '#51BADE'],
                grid: {
                    borderColor: borderColor,
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    padding: {
                        left: 20,
                        right: 20
                    }
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // MRR
    var dash_mrr = function() {
        var charts = document.querySelectorAll('.dash_mrr');
    
        var color;
        var strokeColor;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var options;
        var chart;
    
        [].slice.call(charts).map(function(element) {            
            height = parseInt(KTUtil.css(element, 'height'));
    
            var options = {
                series: [{
                    name: 'Churn MRR',
                    data: [-53591, -51324, -52953, -54852, -53852, -55739]
                }, {
                    name: 'Contraction MRR',
                        data: [-4958, -5580, -6290, -6953, -6492, -7124]
                    }, {                   
                    name: 'New MRR',
                        data: [94821, 104829, 124820, 149825, 138421, 157209]
                }, {
                    name: 'Expansion MRR',
                        data: [13530, 14593, 15238, 14582, 15824, 16952]
                }, {
                    name: 'Reactivation MRR',
                    data: [4243, 3958, 4257, 4672, 4827, 4992]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'bar',
                    stacked: true,
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: ['26%'],
                        borderRadius: 0
                    }
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    type: ['solid', 'solid', 'solid', 'solid', 'solid'],
                    opacity: [0.4, 0.2, 0.8, 0.5, 0.2]
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: ['#001720', '#001720', '#DCF1F8', '#DCF1F8', '#DCF1F8'],
                grid: {
                    borderColor: borderColor,
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    padding: {
                        left: 20,
                        right: 20
                    }
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Full CAC
    var dash_cac = function() {
        var charts = document.querySelectorAll('.dash_cac');
    
        var color;
        var strokeColor;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var options;
        var chart;
    
        [].slice.call(charts).map(function(element) {            
            height = parseInt(KTUtil.css(element, 'height'));
    
            var options = {
                series: [{
                    name: 'Paid CAC',
                    data: [334.59, 330.39, 326.42, 328.39, 326.48, 324.23]
                }, {
                    name: 'Organic CAC',
                    data: [148.49, 143.98, 146.59, 138.95, 142.04, 135.48]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'bar',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: ['28%'],
                        borderRadius: 5
                    }
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    type: ['solid', 'solid'],
                    opacity: [0.4, 1]
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val
                        }
                    }
                },
                colors: ['#001720','#DCF1F8' ],
                grid: {
                    borderColor: borderColor,
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    padding: {
                        left: 20,
                        right: 20
                    }
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Subscribers
    var dash_subscribers = function() {
        var charts = document.querySelectorAll('.dash_subscribers');
    
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
               
            [].slice.call(charts).map(function(element) {            
                height = parseInt(KTUtil.css(element, 'height'));
       
            var options = {
                series: [{
                    name: 'Leads',
                    data: [7318, 7513, 7931, 8314, 8712, 8131]
                }, {
                    name: 'Trials',
                    data: [1634, 1751, 1842, 1935, 2014, 2284]
                }, {
                    name: 'New Subscribers',
                    data: [742, 798, 854, 930, 973, 1131]                    
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {   
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: ['solid', 'solid', 'solid'],
                    opacity: [0.5, 0.5, 0.5]
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: ['#114557', '#1D7998', '#51BADE']
                },
                xaxis: {
                    categories: ['Jul 24', 'Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24'],
                    axisBorder: {
                    show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    },
                },
                yaxis: {
                    show: false
                },
                states: {
                    normal: {
                        filter: {
                        type: 'none',
                        value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                colors: [lightColor, '#1D7998', '#51BADE'],
                grid: {
                    show: false
                },
                markers: {
                    strokeColor: baseColor,
                    strokeWidth: 3
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    var initChartsWidget2 = function() {
        var charts = document.querySelectorAll('.charts-widget-2-chart');
    
        var color;
        var strokeColor;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var options;
        var chart;
    
        [].slice.call(charts).map(function(element) {            
            height = parseInt(KTUtil.css(element, 'height'));
    
            var options = {
                series: [{
                    name: 'Net Profit',
                    data: [35, 65, 75, 55, 45, 60, 55]
                }, {
                    name: 'Revenue',
                    data: [40, 70, 80, 60, 50, 65, 60]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'bar',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: ['30%'],
                        borderRadius: 4
                    }
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    type: ['solid', 'solid'],
                    opacity: [0.25, 1]
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " thousands"
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                colors: ['#ffffff', '#ffffff'],
                grid: {
                    borderColor: borderColor,
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    padding: {
                        left: 20,
                        right: 20
                    }
                }
            };
    
            var chart = new ApexCharts(element, options);
            chart.render()
        });        
    }
    
    // Charts widgets
    var initChartsWidget1 = function() {
        var element = document.getElementById("kt_charts_widget_1_chart");
       
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseColor = KTUtil.getCssVariableValue('--bs-primary');
        var lightColor = KTUtil.getCssVariableValue('--bs-gray-200');
    
        if (!element) {
            return;
        }
    
        var height = parseInt(KTUtil.css(element, 'height'));
    
        var options = {
            series: [{
                name: 'Net Profit',
                data: [60, 60, 90, 90, 80, 80, 70, 70]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
    
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };
    
        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    // Column Chart (Need keep)
    var element = document.getElementById('salestransactions');

    var height = parseInt(KTUtil.css(element, 'height'));
    var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
    var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
    var baseColor = KTUtil.getCssVariableValue('--bs-primary');
    var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');

    if (!element) {
        return;
    }

    var options = {
        series: [{
            name: 'Gross Margin',
            data: [44, 55, 57, 56, 61, 58]
        }, {
            name: 'Sales Transaction',
            data: [76, 85, 101, 98, 87, 105]
        }],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: height,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: ['30%'],
                endingShape: 'rounded'
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px'
                }
            }
        },
        fill: {
            opacity: 1
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        tooltip: {
            style: {
                fontSize: '12px'
            },
            y: {
                formatter: function (val) {
                    return '$' + val + ' thousands'
                }
            }
        },
        colors: [baseColor, secondaryColor],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true
                }
            }
        }
    };

    var chart = new ApexCharts(element, options);
    chart.render();

    

    // Follow button
    var initUserFollowButton = function() {
        var follow = document.querySelector('#kt_user_follow_button');

        if (follow) {
            follow.addEventListener('click', function(e){
                // Prevent default action 
                e.preventDefault();
                
                // Show indicator
                follow.setAttribute('data-kt-indicator', 'on');
                
                // Disable button to avoid multiple click 
				follow.disabled = true;

                // Check button state
                if (follow.classList.contains("btn-success")) {
                     setTimeout(function() {
                        follow.removeAttribute('data-kt-indicator');
                        follow.classList.remove("btn-success");
                        follow.classList.add("btn-light");
                        follow.querySelector(".svg-icon").classList.add("d-none");
                        follow.querySelector(".indicator-label").innerHTML = 'Follow';
				        follow.disabled = false;
                    }, 1500);   
                } else {
                     setTimeout(function() {
                        follow.removeAttribute('data-kt-indicator');
                        follow.classList.add("btn-success");
                        follow.classList.remove("btn-light");
                        follow.querySelector(".svg-icon").classList.remove("d-none");
                        follow.querySelector(".indicator-label").innerHTML = 'Following';
                        follow.disabled = false;
                    }, 1000);   
                }        
            });
        }                 
    }

    // Calendar
    var initCalendarWidget1 = function() {
        if (typeof FullCalendar === 'undefined' || !document.querySelector('#kt_calendar_widget_1')) {
            return;
        }

        var todayDate = moment().startOf('day');
        var YM = todayDate.format('YYYY-MM');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

        var calendarEl = document.getElementById('kt_calendar_widget_1');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },

            height: 800,
            contentHeight: 780,
            aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio

            nowIndicator: true,
            now: TODAY + 'T09:25:00', // just for demo

            views: {
                dayGridMonth: { buttonText: 'month' },
                timeGridWeek: { buttonText: 'week' },
                timeGridDay: { buttonText: 'day' }
            },

            initialView: 'dayGridMonth',
            initialDate: TODAY,

            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            navLinks: true,
            events: [
                {
                    title: 'All Day Event',
                    start: YM + '-01',
                    description: 'Toto lorem ipsum dolor sit incid idunt ut',
                    className: "fc-event-danger fc-event-solid-warning"
                },
                {
                    title: 'Reporting',
                    start: YM + '-14T13:30:00',
                    description: 'Lorem ipsum dolor incid idunt ut labore',
                    end: YM + '-14',
                    className: "fc-event-success"
                },
                {
                    title: 'Company Trip',
                    start: YM + '-02',
                    description: 'Lorem ipsum dolor sit tempor incid',
                    end: YM + '-03',
                    className: "fc-event-primary"
                },
                {
                    title: 'ICT Expo 2017 - Product Release',
                    start: YM + '-03',
                    description: 'Lorem ipsum dolor sit tempor inci',
                    end: YM + '-05',
                    className: "fc-event-light fc-event-solid-primary"
                },
                {
                    title: 'Dinner',
                    start: YM + '-12',
                    description: 'Lorem ipsum dolor sit amet, conse ctetur',
                    end: YM + '-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: YM + '-09T16:00:00',
                    description: 'Lorem ipsum dolor sit ncididunt ut labore',
                    className: "fc-event-danger"
                },
                {
                    id: 1000,
                    title: 'Repeating Event',
                    description: 'Lorem ipsum dolor sit amet, labore',
                    start: YM + '-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: YESTERDAY,
                    end: TOMORROW,
                    description: 'Lorem ipsum dolor eius mod tempor labore',
                    className: "fc-event-primary"
                },
                {
                    title: 'Meeting',
                    start: TODAY + 'T10:30:00',
                    end: TODAY + 'T12:30:00',
                    description: 'Lorem ipsum dolor eiu idunt ut labore'
                },
                {
                    title: 'Lunch',
                    start: TODAY + 'T12:00:00',
                    className: "fc-event-info",
                    description: 'Lorem ipsum dolor sit amet, ut labore'
                },
                {
                    title: 'Meeting',
                    start: TODAY + 'T14:30:00',
                    className: "fc-event-warning",
                    description: 'Lorem ipsum conse ctetur adipi scing'
                },
                {
                    title: 'Happy Hour',
                    start: TODAY + 'T17:30:00',
                    className: "fc-event-info",
                    description: 'Lorem ipsum dolor sit amet, conse ctetur'
                },
                {
                    title: 'Dinner',
                    start: TOMORROW + 'T05:00:00',
                    className: "fc-event-solid-danger fc-event-light",
                    description: 'Lorem ipsum dolor sit ctetur adipi scing'
                },
                {
                    title: 'Birthday Party',
                    start: TOMORROW + 'T07:00:00',
                    className: "fc-event-primary",
                    description: 'Lorem ipsum dolor sit amet, scing'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: YM + '-28',
                    className: "fc-event-solid-info fc-event-light",
                    description: 'Lorem ipsum dolor sit amet, labore'
                }
            ]
        });

        calendar.render();
    }

    // Daterangepicker
    var initDaterangepicker = function () {
        if (!document.querySelector('#kt_dashboard_daterangepicker')) {
            return;
        }

        var picker = $('#kt_dashboard_daterangepicker');
        var start = moment();
        var end = moment();

        function cb(start, end, label) {
            var title = '';
            var range = '';

            if ((end - start) < 100 || label == 'Today') {
                title = 'Today:';
                range = start.format('MMM D');
            } else if (label == 'Yesterday') {
                title = 'Yesterday:';
                range = start.format('MMM D');
            } else {
                range = start.format('MMM D') + ' - ' + end.format('MMM D');
            }

            $('#kt_dashboard_daterangepicker_date').html(range);
            $('#kt_dashboard_daterangepicker_title').html(title);
        }

        picker.daterangepicker({
            direction: KTUtil.isRTL(),
            startDate: start,
            endDate: end,
            opens: 'left',
            applyClass: 'btn-primary',
            cancelClass: 'btn-light-primary',
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end, '');
    }

    var initDarkModeToggle = function() {
        var toggle = document.querySelector('#kt_user_menu_dark_mode_toggle');
        
        if (toggle) {
            toggle.addEventListener('click', function() {
                window.location.href = this.getAttribute('data-kt-url');
            });
        }
    }

    // Public methods
    return {
        init: function () {
            // Daterangepicker
            initDaterangepicker();
            
            // Dark Mode
            initDarkModeToggle();      

            // Essential Widgets
            subscribers();
            mrr();
            arpa();
            newsubscribers();
            trials();
            newtrials();
            n_customerchurn();
            p_customerchurn();
            expansions();
            contractions();
            reactivations();
            grossmrrchurn();
            netmrrgrowth();
            avgfavorites();
            avgessentials();
            skus();
            unsold();
            requests();
            n_inventories();
            a_inventories();
            dsi();
            storesdelivered();
            sales_store();
            itemsdelivered_store();
            itemssold_store();
            purchasing_store();
            fulfillment_store();
            shipping_store();
            payment_store();
            cogs_store();
            a_grossmargin_store();
            p_grossmargin_store();
            
            // Dashboard Widgets
            dash_salestransactions();
            dash_mrr();
            dash_cac();
            dash_subscribers();
            
            initChartsWidget2();

            // Follow button
            initUserFollowButton();

            // Calendar
            initCalendarWidget1();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTWidgets;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTWidgets.init();
});