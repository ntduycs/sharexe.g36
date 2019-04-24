package com.ttcnpm.g36.sharexe.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * For MultiItems response,
 * @implSpec page and size : for paging purpose, for example, we retrieved 35 records from DB but only want to
 * display 10 items. So, we should set page to 4 and size to 10
 * */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MultiItemsResponse<T> {
    private List<T> content;
    private int page;
    private int size;
    private long totalElements;
    private long totalPages;
    private boolean isLast;
}
