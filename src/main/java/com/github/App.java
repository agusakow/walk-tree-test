package com.github;

import com.github.processor.GlobPattern;
import com.github.processor.Imports;
import org.apache.log4j.Logger;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;

public class App {

  final static Logger logger = Logger.getLogger(App.class.getName());

  public static void main(String[] args) {
    logger.info("-- Walk tree test --");

    String baseDir = new File(".").getAbsolutePath();
    Imports imports = new Imports();
    try {
      List<Path> paths = imports.findFiles(Arrays.asList(
          new GlobPattern(baseDir, "**/*.less")
      ));
      logger.info("-- FINAL FILES LIST --");
      paths.forEach(path -> {
        logger.info(path);
      });
    } catch (IOException e) {
      e.printStackTrace();
    }


  }
}
