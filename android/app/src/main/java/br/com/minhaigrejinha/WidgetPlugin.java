package br.com.minhaigrejinha;

import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Context;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Widget")
public class WidgetPlugin extends Plugin {

    @PluginMethod
    public void atualizar(PluginCall call) {
        String dias = call.getString("dias", "[]");
        Context contexto = getContext();
        contexto.getSharedPreferences(EvangelhoWidget.PREFERENCIAS, Context.MODE_PRIVATE).edit().putString(EvangelhoWidget.CHAVE, dias).apply();
        AppWidgetManager gerente = AppWidgetManager.getInstance(contexto);
        int[] ids = gerente.getAppWidgetIds(new ComponentName(contexto, EvangelhoWidget.class));
        if (ids.length > 0) EvangelhoWidget.desenhar(contexto, gerente, ids);
        call.resolve();
    }
}
