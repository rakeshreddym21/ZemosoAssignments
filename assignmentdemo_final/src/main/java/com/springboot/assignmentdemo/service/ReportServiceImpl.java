package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.dao.ReportRepository;
import com.springboot.assignmentdemo.entity.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ReportServiceImpl implements ReportService{
    @Autowired
    private ReportRepository reportRepository;
    @Override
    public List<Report> findAllReports() {
        return reportRepository.findAll();
    }

    @Override
    public Report findReportById(int theId) {
        Optional<Report> theReport = reportRepository.findById(theId);
      if(theReport.isPresent())
      {
          return theReport.get();
      }
        else {
            throw new RuntimeException();
      }
    }

    @Override
    public Report saveReport(Report theReport) {
        reportRepository.save(theReport);
        return theReport;
    }

    @Override
    public void deleteReportById(int theId) {
        reportRepository.deleteById(theId);
    }

}
