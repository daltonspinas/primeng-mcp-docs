# FileUpload

FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features {#features}

### Import {#import}

```typescript
import { FileUploadModule } from 'primeng/fileupload';
```

### Basic {#basic}

FileUpload basic mode provides a simpler UI as an alternative to default advanced mode.

```html
<p-fileupload #fu mode="basic" chooseLabel="Choose" chooseIcon="pi pi-upload" name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)" />
<p-button label="Upload" (onClick)="fu.upload()" severity="secondary" />
```

### Auto {#auto}

When auto property is enabled, a file gets uploaded instantly after selection.

```html
<p-fileupload mode="basic" name="demo[]" chooseIcon="pi pi-upload" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onBasicUploadAuto($event)" [auto]="true" chooseLabel="Browse" />
```

### Advanced {#advanced}

Advanced uploader provides dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

```html
<p-fileupload name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" (onUpload)="onUpload($event)" [multiple]="true" accept="image/*" maxFileSize="1000000" mode="advanced">
    <ng-template #empty>
        <div>Drag and drop files to here to upload.</div>
    </ng-template>
</p-fileupload>
```

### Template {#template}

Uploader UI is customizable using a ng-template called file that gets the File instance as the implicit variable. Second ng-template named content can be used to place custom content inside the content section which would be useful to implement a user interface to manage the uploaded files such as removing them. This template gets the selected files as the implicit variable. Third and final ng-template option is toolbar to display custom content at toolbar.

```html
<p-toast />
<p-fileupload name="myfile[]" url="https://www.primefaces.org/cdn/api/upload.php" [multiple]="true" accept="image/*" maxFileSize="1000000" (onUpload)="onTemplatedUpload()" (onSelect)="onSelectedFiles($event)">
    <ng-template #header let-files let-chooseCallback="chooseCallback" let-clearCallback="clearCallback" let-uploadCallback="uploadCallback">
        <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
            <div class="flex gap-2">
                <p-button (onClick)="choose($event, chooseCallback)" icon="pi pi-images" [rounded]="true" [outlined]="true" />
                <p-button (onClick)="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" [rounded]="true" [outlined]="true" severity="success" [disabled]="!files || files.length === 0" />
                <p-button (onClick)="clearCallback()" icon="pi pi-times" [rounded]="true" [outlined]="true" severity="danger" [disabled]="!files || files.length === 0" />
            </div>
            <p-progressbar [value]="totalSizePercent" [showValue]="false" class="w-full" class="md:w-20rem h-1 w-full md:ml-auto">
                <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
            </p-progressbar>
        </div>
    </ng-template>
    <ng-template #content let-files let-uploadedFiles="uploadedFiles" let-removeFileCallback="removeFileCallback" let-removeUploadedFileCallback="removeUploadedFileCallback">
        <div class="flex flex-col gap-8 pt-4">
            <div *ngIf="files?.length > 0">
                <h5>Pending</h5>
                <div class="flex flex-wrap gap-4">
                    <div *ngFor="let file of files; let i = index" class="p-8 rounded-border flex flex-col border border-surface items-center gap-4">
                        <div>
                            <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                        </div>
                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <p-badge value="Pending" severity="warn" />
                        <p-button icon="pi pi-times" (click)="onRemoveTemplatingFile($event, file, removeFileCallback, index)" [outlined]="true" [rounded]="true" severity="danger" />
                    </div>
                </div>
            </div>
            <div *ngIf="uploadedFiles?.length > 0">
                <h5>Completed</h5>
                <div class="flex flex-wrap gap-4">
                    <div *ngFor="let file of uploadedFiles; let i = index" class="card m-0 px-12 flex flex-col border border-surface items-center gap-4">
                        <div>
                            <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                        </div>
                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <p-badge value="Completed" class="mt-4" severity="success" />
                        <p-button icon="pi pi-times" (onClick)="removeUploadedFileCallback(index)" [outlined]="true" [rounded]="true" severity="danger" />
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
    <ng-template #file></ng-template>
    <ng-template #empty>
        <div class="flex items-center justify-center flex-col">
            <i class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color"></i>
            <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
        </div>
    </ng-template>
</p-fileupload>
```

### Accessibility {#accessibility}

FileUpload uses a hidden native input element with type="file" for screen readers.

### FileUpload {#fileupload}

FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

[↑ Back to Top](#table-of-contents)

## API {#api}

### FileUpload API

API defines helper props, events and others for the PrimeNG FileUpload module.

#### FileUpload {#api-fileupload}

FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.

##### Properties {#api-properties}

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| name | string | null | Name of the request parameter to identify the files at backend. |
| url | string | null | Remote url to upload the files. |
| method | "post" | "put" | post | HTTP method to send the files to the url such as "post" and "put". |
| multiple | boolean | false | Used to select multiple files at once from file dialog. |
| accept | string | null | Comma-separated list of pattern to restrict the allowed file types. Can be any combination of either the MIME types (such as "image/*") or the file extensions (such as ".jpg"). |
| disabled | boolean | false | Disables the upload functionality. |
| auto | boolean | false | When enabled, upload begins automatically after selection is completed. |
| withCredentials | boolean | false | Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. |
| maxFileSize | number | null | Maximum file size allowed in bytes. |
| invalidFileSizeMessageSummary | string | {0}: Invalid file size, | Summary message of the invalid file size. |
| invalidFileSizeMessageDetail | string | maximum upload size is {0}. | Detail message of the invalid file size. |
| invalidFileTypeMessageSummary | string | {0}: Invalid file type, | Summary message of the invalid file type. |
| invalidFileTypeMessageDetail | string | allowed file types: {0}. | Detail message of the invalid file type. |
| invalidFileLimitMessageDetail | string | limit is {0} at most. | Detail message of the invalid file type. |
| invalidFileLimitMessageSummary | string | Maximum number of files exceeded, | Summary message of the invalid file type. |
| style | { [klass: string]: any } | null | Inline style of the element. |
| styleClass | string | null | Class of the element. |
| previewWidth | number | 50 | Width of the image thumbnail in pixels. |
| chooseLabel | string | null | Label of the choose button. Defaults to PrimeNG Locale configuration. |
| uploadLabel | string | null | Label of the upload button. Defaults to PrimeNG Locale configuration. |
| cancelLabel | string | null | Label of the cancel button. Defaults to PrimeNG Locale configuration. |
| chooseIcon | string | null | Icon of the choose button. |
| uploadIcon | string | null | Icon of the upload button. |
| cancelIcon | string | null | Icon of the cancel button. |
| showUploadButton | boolean | true | Whether to show the upload button. |
| showCancelButton | boolean | true | Whether to show the cancel button. |
| mode | "advanced" | "basic" | advanced | Defines the UI of the component. |
| headers | HttpHeaders | null | HttpHeaders class represents the header configuration options for an HTTP request. |
| customUpload | boolean | false | Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeNG Locale configuration. |
| fileLimit | number | null | Maximum number of files that can be uploaded. |
| uploadStyleClass | string | null | Style class of the upload button. |
| cancelStyleClass | string | null | Style class of the cancel button. |
| removeStyleClass | string | null | Style class of the remove button. |
| chooseStyleClass | string | null | Style class of the choose button. |
| chooseButtonProps | ButtonProps | null | Used to pass all properties of the ButtonProps to the choose button inside the component. |
| uploadButtonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the upload button inside the component. |
| cancelButtonProps | ButtonProps | ... | Used to pass all properties of the ButtonProps to the cancel button inside the component. |

##### Emitters {#api-emitters}

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onBeforeUpload | event :  FileBeforeUploadEvent | Callback to invoke before file upload is initialized. |
| onSend | event :  FileSendEvent | An event indicating that the request was sent to the server. Useful when a request may be retried multiple times, to distinguish between retries on the final event stream. |
| onUpload | event :  FileUploadEvent | Callback to invoke when file upload is complete. |
| onError | event :  FileUploadErrorEvent | Callback to invoke if file upload fails. |
| onClear | event :  Event | Callback to invoke when files in queue are removed without uploading using clear all button. |
| onRemove | event :  FileRemoveEvent | Callback to invoke when a file is removed without uploading using clear button of a file. |
| onSelect | event :  FileSelectEvent | Callback to invoke when files are selected. |
| onProgress | event :  FileProgressEvent | Callback to invoke when files are being uploaded. |
| uploadHandler | event :  FileUploadHandlerEvent | Callback to invoke in custom upload mode to upload the files manually. |
| onImageError | event :  Event | This event is triggered if an error occurs while loading an image file. |
| onRemoveUploadedFile | event :  RemoveUploadedFileEvent | This event is triggered if an error occurs while loading an image file. |

##### Methods {#api-methods}

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| uploader |  | Uploads the selected files. |
| clear |  | Clears the files list. |
| remove | event :  Eventindex :  number | Removes a single file. |
| removeUploadedFile | index :  any | Removes uploaded file. |

##### Templates {#api-templates}

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| file |  | Template for file. |
| header |  | Template for header. |
| content |  | Template for content. |
| toolbar |  | Template for toolbar. |
| chooseicon |  | Template for choose icon. |
| filelabel |  | Template for file label. |
| uploadicon |  | Template for upload icon. |
| cancelicon |  | Template for cancel icon. |
| empty |  | Template for empty state. |

[↑ Back to Top](#table-of-contents)

## Theming {#theming}

### FileUpload Theming

#### CSS Classes {#theming-css-classes}

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-fileupload | Class name of the root element |
| p-fileupload-header | Class name of the header element |
| p-fileupload-choose-button | Class name of the choose button element |
| p-fileupload-upload-button | Class name of the upload button element |
| p-fileupload-cancel-button | Class name of the cancel button element |
| p-fileupload-content | Class name of the content element |
| p-fileupload-file-list | Class name of the file list element |
| p-fileupload-file | Class name of the file element |
| p-fileupload-file-thumbnail | Class name of the file thumbnail element |
| p-fileupload-file-info | Class name of the file info element |
| p-fileupload-file-name | Class name of the file name element |
| p-fileupload-file-size | Class name of the file size element |
| p-fileupload-file-badge | Class name of the file badge element |
| p-fileupload-file-actions | Class name of the file actions element |
| p-fileupload-file-remove-button | Class name of the file remove button element |
| p-fileupload-basic-content | Class name of the content in basic mode |

#### FileUpload Design Tokens {#theming-fileupload-design-tokens}

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| fileupload.root.background | fileupload.background | --p-fileupload-background | Background of root |
| fileupload.root.borderColor | fileupload.border.color | --p-fileupload-border-color | Border color of root |
| fileupload.root.color | fileupload.color | --p-fileupload-color | Color of root |
| fileupload.root.borderRadius | fileupload.border.radius | --p-fileupload-border-radius | Border radius of root |
| fileupload.root.transitionDuration | fileupload.transition.duration | --p-fileupload-transition-duration | Transition duration of root |
| fileupload.header.background | fileupload.header.background | --p-fileupload-header-background | Background of header |
| fileupload.header.color | fileupload.header.color | --p-fileupload-header-color | Color of header |
| fileupload.header.padding | fileupload.header.padding | --p-fileupload-header-padding | Padding of header |
| fileupload.header.borderColor | fileupload.header.border.color | --p-fileupload-header-border-color | Border color of header |
| fileupload.header.borderWidth | fileupload.header.border.width | --p-fileupload-header-border-width | Border width of header |
| fileupload.header.borderRadius | fileupload.header.border.radius | --p-fileupload-header-border-radius | Border radius of header |
| fileupload.header.gap | fileupload.header.gap | --p-fileupload-header-gap | Gap of header |
| fileupload.content.highlightBorderColor | fileupload.content.highlight.border.color | --p-fileupload-content-highlight-border-color | Highlight border color of content |
| fileupload.content.padding | fileupload.content.padding | --p-fileupload-content-padding | Padding of content |
| fileupload.content.gap | fileupload.content.gap | --p-fileupload-content-gap | Gap of content |
| fileupload.file.padding | fileupload.file.padding | --p-fileupload-file-padding | Padding of file |
| fileupload.file.gap | fileupload.file.gap | --p-fileupload-file-gap | Gap of file |
| fileupload.file.borderColor | fileupload.file.border.color | --p-fileupload-file-border-color | Border color of file |
| fileupload.file.info.gap | fileupload.file.info.gap | --p-fileupload-file-info-gap | Info gap of file |
| fileupload.fileList.gap | fileupload.file.list.gap | --p-fileupload-file-list-gap | Gap of file list |
| fileupload.progressbar.height | fileupload.progressbar.height | --p-fileupload-progressbar-height | Height of progressbar |
| fileupload.basic.gap | fileupload.basic.gap | --p-fileupload-basic-gap | Gap of basic |

#### Built-in Presets {#theming-built-in-presets}

PrimeNG offers various preset options that allow you to customize the component's styling to match your application's design system. Below you'll find links to the implementation and type definitions for each preset.

| Preset | Implementation | Types |
| --- | --- | --- |
| Aura | Aura | Aura |
| Lara | Lara | Lara |
| Nora | Nora | Nora |
| Material | Material | Material |

[↑ Back to Top](#table-of-contents)

---

## Quick Navigation

**Jump to Section:**
- [Features](#features)
- [API](#api)
- [Theming](#theming)

[View Official Documentation](https://primeng.org/fileupload)
