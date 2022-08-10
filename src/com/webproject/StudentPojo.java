package com.webproject;

public class StudentPojo {
	
	private Integer sl_no;
	private String name;
	private String classes;
	private String roll_no;
	private String mobile_no;
	private String email_id;
	
	
	
	public Integer getSl_no() {
		return sl_no;
	}
	public void setSl_no(Integer sl_no) {
		this.sl_no = sl_no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getClasses() {
		return classes;
	}
	public void setClasses(String classes) {
		this.classes = classes;
	}
	public String getRoll_no() {
		return roll_no;
	}
	public void setRoll_no(String roll_no) {
		this.roll_no = roll_no;
	}
	public String getMobile_no() {
		return mobile_no;
	}
	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public StudentPojo(Integer sl_no, String name, String classes, String roll_no, String mobile_no, String email_id) {
		super();
		this.sl_no = sl_no;
		this.name = name;
		this.classes = classes;
		this.roll_no = roll_no;
		this.mobile_no = mobile_no;
		this.email_id = email_id;
	}
	
	
	

}
