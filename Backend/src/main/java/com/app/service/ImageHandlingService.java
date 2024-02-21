package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface ImageHandlingService {
	String uploadImage(MultipartFile imageFile) throws IOException;
	byte[] restoreImage(long bookId) throws IOException;
}
