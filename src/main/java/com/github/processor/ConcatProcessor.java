package com.github.processor;

public class ConcatProcessor implements Processor {
  @Override
  public void execute(Context context) {
    context.setOutput(Utils.concat(context.getImportContents()));
  }
}
