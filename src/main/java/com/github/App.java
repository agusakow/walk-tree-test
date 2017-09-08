package com.github;

import com.github.processor.GlobPattern;
import com.github.processor.Imports;
import org.apache.log4j.Logger;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;

public class App {

  final static Logger logger = Logger.getLogger(App.class.getName());

  public static void main(String[] args) {
    logger.info("-- Walk tree test --");

    String baseDir = new File(".").getAbsolutePath();
    Imports imports = new Imports();
    try {
      imports.findFiles(Arrays.asList(
          new GlobPattern(baseDir, "**/*.java")
      ));
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
