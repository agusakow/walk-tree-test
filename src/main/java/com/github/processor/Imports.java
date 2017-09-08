package com.github.processor;

import com.github.App;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.PathMatcher;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;


public class Imports {
  final static Logger logger = Logger.getLogger(Imports.class.getName());

  public List<Path> findFiles(List<GlobPattern> patterns) throws IOException {
    logger.info("Start looking for files");

    List<Path> files = new ArrayList<>();

    for (GlobPattern pattern : patterns) {
      List<Path> matches = findFiles(pattern);
      files.addAll(matches);
    }
    return files;
  }

  private List<Path> findFiles(GlobPattern pattern) throws IOException {
    final List<Path> result = new ArrayList<>();
    final PathMatcher matcher = FileSystems.getDefault().getPathMatcher("glob:" + pattern.getPattern());
    final String relativePath = pattern.getRelativePath() != null ? pattern.getRelativePath() : "";
    final Path dir = Paths.get(relativePath);

    if (!Files.exists(dir)) {
      return result;
    }

    Files.walkFileTree(dir, new SimpleFileVisitor<Path>() {
      @Override
      public FileVisitResult visitFile(Path path, BasicFileAttributes attrs) throws IOException {
        if (matcher.matches(dir.relativize(path))) {
          result.add(path);
        }
        return FileVisitResult.CONTINUE;
      }

      @Override
      public FileVisitResult visitFileFailed(Path file, IOException exc) throws IOException {
        return FileVisitResult.CONTINUE;
      }
    });

    result.sort(Comparator.comparing(Path::getFileName));
    return result;
  }
}
