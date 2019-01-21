/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ERROR_DEBUG_CONTEXT, ERROR_LOGGER, getDebugContext } from '../errors';
export function expressionChangedAfterItHasBeenCheckedError(context, oldValue, currValue, isFirstCheck) {
    var msg = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + oldValue + "'. Current value: '" + currValue + "'.";
    if (isFirstCheck) {
        msg +=
            " It seems like the view has been created after its parent and its children have been dirty checked." +
                " Has it been created in a change detection hook ?";
    }
    return viewDebugError(msg, context);
}
export function viewWrappedDebugError(err, context) {
    if (!(err instanceof Error)) {
        // errors that are not Error instances don't have a stack,
        // so it is ok to wrap them into a new Error object...
        err = new Error(err.toString());
    }
    _addDebugContext(err, context);
    return err;
}
export function viewDebugError(msg, context) {
    var err = new Error(msg);
    _addDebugContext(err, context);
    return err;
}
function _addDebugContext(err, context) {
    err[ERROR_DEBUG_CONTEXT] = context;
    err[ERROR_LOGGER] = context.logError.bind(context);
}
export function isViewDebugError(err) {
    return !!getDebugContext(err);
}
export function viewDestroyedError(action) {
    return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + action);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29yZS9zcmMvdmlldy9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFHN0UsTUFBTSxVQUFVLDJDQUEyQyxDQUN2RCxPQUFxQixFQUFFLFFBQWEsRUFBRSxTQUFjLEVBQUUsWUFBcUI7SUFDN0UsSUFBSSxHQUFHLEdBQ0gsZ0hBQThHLFFBQVEsMkJBQXNCLFNBQVMsT0FBSSxDQUFDO0lBQzlKLElBQUksWUFBWSxFQUFFO1FBQ2hCLEdBQUc7WUFDQyxxR0FBcUc7Z0JBQ3JHLG1EQUFtRCxDQUFDO0tBQ3pEO0lBQ0QsT0FBTyxjQUFjLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsR0FBUSxFQUFFLE9BQXFCO0lBQ25FLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxLQUFLLENBQUMsRUFBRTtRQUMzQiwwREFBMEQ7UUFDMUQsc0RBQXNEO1FBQ3RELEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUNqQztJQUNELGdCQUFnQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEdBQVcsRUFBRSxPQUFxQjtJQUMvRCxJQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFVLEVBQUUsT0FBcUI7SUFDeEQsR0FBVyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzNDLEdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEdBQVU7SUFDekMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBYztJQUMvQyxPQUFPLElBQUksS0FBSyxDQUFDLDBEQUF3RCxNQUFRLENBQUMsQ0FBQztBQUNyRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0VSUk9SX0RFQlVHX0NPTlRFWFQsIEVSUk9SX0xPR0dFUiwgZ2V0RGVidWdDb250ZXh0fSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtEZWJ1Z0NvbnRleHQsIFZpZXdTdGF0ZX0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yKFxuICAgIGNvbnRleHQ6IERlYnVnQ29udGV4dCwgb2xkVmFsdWU6IGFueSwgY3VyclZhbHVlOiBhbnksIGlzRmlyc3RDaGVjazogYm9vbGVhbik6IEVycm9yIHtcbiAgbGV0IG1zZyA9XG4gICAgICBgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvcjogRXhwcmVzc2lvbiBoYXMgY2hhbmdlZCBhZnRlciBpdCB3YXMgY2hlY2tlZC4gUHJldmlvdXMgdmFsdWU6ICcke29sZFZhbHVlfScuIEN1cnJlbnQgdmFsdWU6ICcke2N1cnJWYWx1ZX0nLmA7XG4gIGlmIChpc0ZpcnN0Q2hlY2spIHtcbiAgICBtc2cgKz1cbiAgICAgICAgYCBJdCBzZWVtcyBsaWtlIHRoZSB2aWV3IGhhcyBiZWVuIGNyZWF0ZWQgYWZ0ZXIgaXRzIHBhcmVudCBhbmQgaXRzIGNoaWxkcmVuIGhhdmUgYmVlbiBkaXJ0eSBjaGVja2VkLmAgK1xuICAgICAgICBgIEhhcyBpdCBiZWVuIGNyZWF0ZWQgaW4gYSBjaGFuZ2UgZGV0ZWN0aW9uIGhvb2sgP2A7XG4gIH1cbiAgcmV0dXJuIHZpZXdEZWJ1Z0Vycm9yKG1zZywgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3V3JhcHBlZERlYnVnRXJyb3IoZXJyOiBhbnksIGNvbnRleHQ6IERlYnVnQ29udGV4dCk6IEVycm9yIHtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgLy8gZXJyb3JzIHRoYXQgYXJlIG5vdCBFcnJvciBpbnN0YW5jZXMgZG9uJ3QgaGF2ZSBhIHN0YWNrLFxuICAgIC8vIHNvIGl0IGlzIG9rIHRvIHdyYXAgdGhlbSBpbnRvIGEgbmV3IEVycm9yIG9iamVjdC4uLlxuICAgIGVyciA9IG5ldyBFcnJvcihlcnIudG9TdHJpbmcoKSk7XG4gIH1cbiAgX2FkZERlYnVnQ29udGV4dChlcnIsIGNvbnRleHQpO1xuICByZXR1cm4gZXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlld0RlYnVnRXJyb3IobXNnOiBzdHJpbmcsIGNvbnRleHQ6IERlYnVnQ29udGV4dCk6IEVycm9yIHtcbiAgY29uc3QgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIF9hZGREZWJ1Z0NvbnRleHQoZXJyLCBjb250ZXh0KTtcbiAgcmV0dXJuIGVycjtcbn1cblxuZnVuY3Rpb24gX2FkZERlYnVnQ29udGV4dChlcnI6IEVycm9yLCBjb250ZXh0OiBEZWJ1Z0NvbnRleHQpIHtcbiAgKGVyciBhcyBhbnkpW0VSUk9SX0RFQlVHX0NPTlRFWFRdID0gY29udGV4dDtcbiAgKGVyciBhcyBhbnkpW0VSUk9SX0xPR0dFUl0gPSBjb250ZXh0LmxvZ0Vycm9yLmJpbmQoY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZpZXdEZWJ1Z0Vycm9yKGVycjogRXJyb3IpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhZ2V0RGVidWdDb250ZXh0KGVycik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aWV3RGVzdHJveWVkRXJyb3IoYWN0aW9uOiBzdHJpbmcpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgRXJyb3IoYFZpZXdEZXN0cm95ZWRFcnJvcjogQXR0ZW1wdCB0byB1c2UgYSBkZXN0cm95ZWQgdmlldzogJHthY3Rpb259YCk7XG59XG4iXX0=