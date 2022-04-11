package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.entity.Report;

import java.util.List;

public interface ReportService {
    List<Report> findAllReports();

    Report findReportById(int theId);

    Report saveReport(Report theReport);

    void deleteReportById(int theId);
}
