(function() {var implementors = {};
implementors["pravega_client_rust"] = [{"text":"impl&lt;__T0&gt; IntoError&lt;RawClientError&gt; for AuthTokenExpired&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RawClientError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;Replies&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;RawClientError&gt; for GetConnectionFromPool <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RawClientError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;RawClientError&gt; for WriteRequest <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RawClientError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;RawClientError&gt; for ReadReply <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RawClientError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0, __T1&gt; IntoError&lt;RawClientError&gt; for IncompatibleVersion&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RawClientError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;i32&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Into&lt;i32&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;RawClientError&gt; for RequestTimeout <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RawClientError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;SegmentWriterError&gt; for SendToProcessor <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0, __T1&gt; IntoError&lt;SegmentWriterError&gt; for EventSizeTooLarge&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;usize&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Into&lt;usize&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;SegmentWriterError&gt; for ParseToEventCommand <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;SegmentWriterError&gt; for SegmentWriting <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;SegmentWriterError&gt; for RetryControllerWriting&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;RetryError&lt;ControllerError&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;SegmentWriterError&gt; for RetryConnectionPool&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;RetryError&lt;ConnectionPoolError&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;SegmentWriterError&gt; for RetryRawClient&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;RetryError&lt;RawClientError&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0, __T1&gt; IntoError&lt;SegmentWriterError&gt; for WrongReply&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;String&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Into&lt;Replies&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;SegmentWriterError&gt; for WrongHost&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;String&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;SegmentWriterError&gt; for ReactorClosed&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;String&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;SegmentWriterError&gt; for ConditionalCheckFailed <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SegmentWriterError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;TransactionalEventStreamWriterError&gt; for PingerError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TransactionalEventStreamWriterError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;String&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;TransactionalEventStreamWriterError&gt; for TxnStreamControllerError <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TransactionalEventStreamWriterError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;TransactionError&gt; for TxnSegmentWriterError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TransactionError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;String&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;TransactionError&gt; for TxnStreamWriterError <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TransactionError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;TransactionError&gt; for TxnClosed&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TransactionError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;TxId&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl IntoError&lt;TransactionError&gt; for TxnControllerError <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TransactionError: Error + ErrorCompat,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0, __T1&gt; IntoError&lt;TransactionError&gt; for TxnCommitError&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TransactionError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;TxId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Into&lt;TransactionStatus&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0, __T1&gt; IntoError&lt;TransactionError&gt; for TxnAbortError&lt;__T0, __T1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TransactionError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;TxId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T1: Into&lt;TransactionStatus&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;SerdeError&gt; for Cbor&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SerdeError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;String&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;SynchronizerError&gt; for SyncTableError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SynchronizerError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;String&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;SynchronizerError&gt; for SyncUpdateError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SynchronizerError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;String&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;__T0&gt; IntoError&lt;SynchronizerError&gt; for SyncTombstoneError&lt;__T0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SynchronizerError: Error + ErrorCompat,<br>&nbsp;&nbsp;&nbsp;&nbsp;__T0: Into&lt;String&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()