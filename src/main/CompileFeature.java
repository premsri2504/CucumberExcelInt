package com.cucumber.examp;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import javax.swing.text.AbstractDocument.LeafElement;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.xmlbeans.impl.xb.xsdschema.impl.AllImpl;

public class CompileFeature {

	public static void getFeatureFileCompile() throws Throwable {
		List<String> allLines = Files.readAllLines(Paths
				.get("D:\\Teaf_WebApp\\AdactinAutomation\\src\\test\\java\\com\\cucumber\\feature\\Facebook.feature"));

		for (int i = 0; i < allLines.size(); i++) {
			String line = allLines.get(i);

			if (line.trim().startsWith("Examples:")) {
				StringBuffer sbExamples = new StringBuffer();
				String ex = allLines.get(i + 1);
				String[] split = ex.split("\\|");
				for (int s = 0; s < split.length; s++) {
					List<String> readExcelSheet = readExcelSheet(split[s]);
					StringBuffer sb = new StringBuffer();
					sb.append("|");

					for (int j = 0; j < readExcelSheet.size(); j++) {
						sb.append(readExcelSheet.get(j) + "|");

					}
					sb.append("\n");
					if (sb.length() > 2) {
						sbExamples.append(sb);
					}

				}
				if (sbExamples.toString().trim().length() > 2) {
					// System.out.println(sbExamples.toString().trim());

					String[] lines = sbExamples.toString().trim().split("\r\n|\r|\n");
					String[] singleLine = lines[0].split("\\|");

					int row = lines.length, column = singleLine.length;

					String original[][] = new String[row][column];
					String transpose[][] = new String[column][row];
					for (int j = 0; j < lines.length; j++) {
						// System.out.println(lines[j]);
						String[] singleLine1 = lines[j].split("\\|");

						for (int k = 1; k < singleLine.length; k++) {

							original[j][k - 1] = singleLine1[k];
						}
					}

					for (String[] x : original) {
						for (String y : x) {
							System.out.print(y + "    ");
						}
						System.out.println();
					}

					for (int l = 0; l < row; l++) {
						for (int j = 0; j < column; j++) {
							try {
								transpose[j][l] = original[l][j];
							} catch (Exception e) {
								transpose[j][l] = "null";
							}
						}
					}
					// Display transposed matrix
					// display(transpose);
					StringBuffer sbAddFile = new StringBuffer();
					for (String[] x : transpose) {
						sbAddFile.append("|");
						for (String y : x) {
							if (y == null) {
								continue;
							}
							sbAddFile.append(y + "|");
						}
						sbAddFile.append("\n");
					}
					
					String[] linesTrim = sbAddFile.toString().trim().split("\r\n|\r|\n");
					StringBuffer finalAppend = new StringBuffer();
					for (String x : linesTrim) {
						if (x.length()>2) {
							finalAppend.append(x+"\n");
						}
					}
					System.out.println(finalAppend);
					allLines.add(i + 2, finalAppend.toString().trim());
				}
				System.out.println("=============");
				// System.out.println(allLines);

			}

		}
		Files.write(
				Paths.get(
						"D:\\Teaf_WebApp\\AdactinAutomation\\src\\test\\java\\com\\cucumber\\featureCompile\\Facebook.feature"),
				allLines, StandardCharsets.UTF_8);

	}

	public static List<String> readExcelSheet(String colExp) throws Throwable {
		File f = new File("D:\\Teaf_WebApp\\AdactinAutomation\\src\\test\\java\\com\\cucumber\\examp\\Data.xlsx");
		FileInputStream fin = new FileInputStream(f);
		Workbook wb = new XSSFWorkbook(fin);
		Sheet sheet = wb.getSheet("Sheet1");
		List<String> listData = new ArrayList<String>();
		int physicalNumberOfCells = sheet.getRow(0).getPhysicalNumberOfCells();
		for (int i = 0; i < physicalNumberOfCells; i++) {
			String col = sheet.getRow(0).getCell(i).getStringCellValue();
			if (col.equalsIgnoreCase(colExp)) {
				int physicalNumberOfRows = sheet.getPhysicalNumberOfRows();
				for (int j = 1; j < physicalNumberOfRows; j++) {
					Cell cell = sheet.getRow(j).getCell(i);
					String stringCellValue = null;
					if (cell.getCellType().equals(CellType.STRING)) {
						stringCellValue = cell.getStringCellValue();
						listData.add(stringCellValue);

					} else if (cell.getCellType().equals(CellType.NUMERIC)) {
						double numericCellValue = cell.getNumericCellValue();
						long l = (long) numericCellValue;
						stringCellValue = String.valueOf(l);
						listData.add(stringCellValue);

					} else {
						listData.add("null");
					}
				}

			}
		}
		return listData;
	}

	public static void main(String[] args) throws Throwable {

		getFeatureFileCompile();
	}
}
