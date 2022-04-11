package com.springboot.assignmentdemo.service;

import com.springboot.assignmentdemo.dao.ReportRepository;
import com.springboot.assignmentdemo.entity.Report;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@RunWith(SpringRunner.class)
@SpringBootTest
class ReportServiceImplTest {
    @Autowired
    private ReportServiceImpl reportService;

    @MockBean
    private ReportRepository reportRepository;


    @Test
    void findAllReports() {
        when(reportRepository.findAll())
                .thenReturn(Stream.of(new Report("Covid", "Tablets"), new Report("Typhoids", "Tablets")).collect(Collectors.toList()));

        assertEquals(2, reportService.findAllReports().size());
    }

    @Test
    void findReportById() {
        Report report = new Report(0, "covid", "Hud", null);

        when(reportRepository.findById(0)).thenReturn(Optional.of(report));

        assertEquals(report, reportService.findReportById(0));
    }
    @Test
    void findReportByIdException() {
        Report report = new Report(0, "covid", "Hud", null);

        when(reportRepository.findById(32)).thenReturn(Optional.of(report));

        assertThrows(RuntimeException.class,()->reportService.findReportById(0));

    }

    @Test
    void saveReport() {
        Report report = new Report(30,"Covid", "Tablets",null);
        reportService.saveReport(report);
        verify(reportRepository).save(report);
    }


    @Test
    void deleteReportById() {
        reportService.deleteReportById(30);
        verify(reportRepository).deleteById(30);
    }
}