import sharp from "sharp";
import { z } from "zod";

import axiosInstance from "@/lib/axiosInstance";
import { createUploadthing, type FileRouter } from "uploadthing/next";
// import {UploadThingError} from "uploadthing/server"

const f = createUploadthing();

export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "4MB" } })
        .input(z.object({ configId: z.string().optional() }))
        .middleware(async ({ input }) => {
            return { input };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            const { configId } = metadata.input;

            const res = await fetch(file.url);
            const buffer = await res.arrayBuffer();

            const imgMetadata = await sharp(buffer).metadata();
            const { width, height } = imgMetadata;

            if (!configId) {
                // fetch request
                const response = await axiosInstance.post("/custom-case/configurations/", {
                    imageUrl: file.url,
                    height: height || 500,
                    width: width || 500,
                });

                const configuration = response?.data;

                return { configId: configuration?.id };
            } else {
                // fetch request
                const response = await axiosInstance.put("/custom-case/configurations/", {
                    configurationId: configId,
                    croppedImageUrl: file.url,
                });

                const updatedConfiguration = response?.data;

                return { configId: updatedConfiguration?.id };
            }
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
